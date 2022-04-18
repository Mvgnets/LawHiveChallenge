import { Box } from '@mui/material'
import axios from 'axios'
import React, { Key } from 'react'

export default function JobPostingsList() {
    const [jobPostings, setJobPostings] = React.useState([])
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        axios.get('http://localhost:4000/job-postings')
            .then(res => {
                const jobs = res.data;
                setJobPostings(jobs)
            })
            .catch(setError)
    }, [jobPostings])

    return (

        < div className='row' >
            {
                jobPostings.map((job: any, i: Key) =>
                    <Box
                        sx={{
                            mt: 4,
                            mx: 4,
                            px: 5,
                            py: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#e6e6e6'
                        }}
                        key={i}
                    >
                        <div> {job.title}</div>
                        <div> {job.description}</div>
                        <div> {job.feeStructure === 'fixedFee' ? 'Fixed Fee' : 'No Win No Fee'}</div>
                        <div> {(job.feeStructure === 'fixedFee' ? '£' : '') + job.feeAmount + (job.feeStructure === 'noWinNoFee' ? '%' : '')}</div>
                    </Box>
                )
            }
        </div >
    )
}