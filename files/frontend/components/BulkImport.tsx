import { useState } from 'react';

export default function BulkImport() {
  const [file, setFile] = useState<File|null>(null);
  const handleUpload = async () => {
    if (!file) return;
    // POST file to `/api/candidates/bulk`
  };
  return (
    <div>
      <input type="file" accept=".xlsx" onChange={e => setFile(e.target.files?.[0]||null)} />
      <button onClick={handleUpload}>Import</button>
    </div>
  );
}