import React, { useEffect, useState } from 'react';
import Resultrow from '../components/Resultrow';

const RADIUM_GREEN = '#d7f96a';

const staticData = [
  { name: 'Kavya', trainer: 'Priya', tech: 20, practical: 40 },
  { name: 'Diya', trainer: 'Priya', tech: 10, practical: 50 },
  { name: 'Geetha', trainer: 'Priya', tech: 15, practical: 45 },
  { name: 'Keerthi', trainer: 'Priya', tech: 10, practical: 60 },
  { name: 'Sujitha', trainer: 'Priya', tech: 20, practical: 30 },
  { name: 'Ramu', trainer: 'Priya', tech: 25, practical: 60 },
  { name: 'Ram', trainer: 'Priya', tech: 15, practical: 30 },
];


const Result = () => {
  const [rows, setRows] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('technicalExamResults') || '[]');
    let updated = false;

    const augmented = (stored.length > 0 ? stored : staticData).map((entry) => {
      const practical = entry.practical ?? Math.floor(Math.random() * 21) + 50; 
      const score = entry.score ?? entry.tech ?? 0;
      const trainer = entry.trainer || 'Priya';
      const total = score + practical;

      if (entry.practical === undefined || entry.total === undefined) {
        updated = true;
      }

      return {
        ...entry,
        trainer,
        score,
        practical,
        total,
      };
    });

    if (updated || stored.length === 0) {
      localStorage.setItem('technicalExamResults', JSON.stringify(augmented));
    }

    setRows(augmented);
  }, []);

  const downloadCSV = () => {
    const header = ['S.No', 'Trainee Name', 'Trainer Name', 'Technical (30)', 'Practical (70)', 'Total (100)'];
    const csv = [
      header.join(','),
      ...rows.map((r, i) => [i + 1, r.name, r.trainer, r.score, r.practical, r.total].join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement('a'), { href: url, download: 'exam_scores.csv' });
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const enterEditMode = () => setEditMode(true);

  const handleRowChange = (idx, field, value) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === idx
          ? {
              ...row,
              [field]: field === 'practical' || field === 'score' ? Number(value) : value,
              total:
                field === 'practical'
                  ? Number(value) + (row.score || 0)
                  : field === 'score'
                  ? Number(value) + (row.practical || 0)
                  : row.total,
            }
          : row
      )
    );
  };

  const saveChanges = () => {
    for (const r of rows) {
      if (r.practical < 0 || r.practical > 70 || Number.isNaN(r.practical)) {
        alert(`Practical mark for ${r.name} must be between 0 and 70`);
        return;
      }
      if (r.score < 0 || r.score > 30 || Number.isNaN(r.score)) {
        alert(`Technical score for ${r.name} must be between 0 and 30`);
        return;
      }
    }
    localStorage.setItem('technicalExamResults', JSON.stringify(rows));
    setEditMode(false);
  };

  useEffect(() => {
        document.title = 'VTS_Exam_Portal | Result';
      }, []);

  return (
    <div className="container py-4">
      <Resultrow />

      {/* Table */}
      <div className="table-responsive mt-4">
        <table className="text-center w-100" style={{ borderCollapse: 'collapse', border: 'none' }}>
          <thead>
            <tr style={{ backgroundColor: '#000', color: '#fff' }}>
              <th style={{ border: 'none', padding: '8px' }}>S.No</th>
              <th style={{ border: 'none', padding: '8px' }}>Trainee's Name</th>
              <th style={{ border: 'none', padding: '8px' }}>Trainer Name</th>
              <th style={{ border: 'none', padding: '8px' }}>Technical Marks (Out of 30)</th>
              <th style={{ border: 'none', padding: '8px' }}>Practical Marks (Out of 70)</th>
              <th style={{ border: 'none', padding: '8px' }}>Total Marks</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: RADIUM_GREEN, color: '#000' }}>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ border: 'none', padding: '10px' }}>
                  No data yet
                </td>
              </tr>
            ) : (
              rows.map((r, i) => (
                <tr key={i}>
                  <td style={{ border: 'none', padding: '8px' }}>{i + 1}</td>
                  <td style={{ border: 'none', padding: '8px' }}>{r.name}</td>
                  <td style={{ border: 'none', padding: '8px' }}>
                    {editMode ? (
                      <input
                        value={r.trainer}
                        onChange={(e) => handleRowChange(i, 'trainer', e.target.value)}
                        className="form-control form-control-sm text-center"
                        style={{ border: '1px solid #999', minWidth: 90 }}
                      />
                    ) : (
                      r.trainer
                    )}
                  </td>
                  <td style={{ border: 'none', padding: '8px' }}>
                    {editMode ? (
                      <input
                        type="number"
                        min="0"
                        max="30"
                        value={r.score}
                        onChange={(e) => handleRowChange(i, 'score', e.target.value)}
                        className="form-control form-control-sm text-center"
                        style={{ border: '1px solid #999', maxWidth: 80 }}
                      />
                    ) : (
                      r.score
                    )}
                  </td>
                  <td style={{ border: 'none', padding: '8px' }}>
                    {editMode ? (
                      <input
                        type="number"
                        min="0"
                        max="70"
                        value={r.practical}
                        onChange={(e) => handleRowChange(i, 'practical', e.target.value)}
                        className="form-control form-control-sm text-center"
                        style={{ border: '1px solid #999', maxWidth: 80 }}
                      />
                    ) : (
                      r.practical
                    )}
                  </td>
                  <td style={{ border: 'none', padding: '8px' }}>{r.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
     <div className="d-flex justify-content-center gap-3 mt-3">
  <button className="btn btn-dark" onClick={downloadCSV}>
    Download
  </button>
  {editMode ? (
    <button className="btn btn-success" onClick={saveChanges}>
      Save
    </button>
  ) : (
    <button
      className="btn btn-secondary text-dark"
      onClick={enterEditMode}
      style={{ backgroundColor: '#d6ff63' }}
    >
      Edit
    </button>
  )}
</div>

    </div>
  );
};

export default Result;
