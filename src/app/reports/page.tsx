"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsPage: React.FC = () => {
    const [fileData, setFileData] = useState<Array<{ name: string; url: string }>>([]);
    const currentDir = '/src/app/reports';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{ files: Array<{ name: string; url: string }> }>('/api/files');
                setFileData(response.data.files);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Reports in {currentDir}</h1>
            <table>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Download Link</th>
                    </tr>
                </thead>
                <tbody>
                    {fileData.map((file, index) => (
                        <tr key={index}>
                            <td>{file.name}</td>
                            <td><a href={file.url} download={file.name}>Download</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsPage;