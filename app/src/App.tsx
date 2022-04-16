import { LoadingButton } from '@mui/lab'
import { Box, CircularProgress, Paper, Stack, TextField } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
const theme = createTheme()

function App() {

  const [jobPostings, setJobPostings] = React.useState([])
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    fetch('http://localhost:4000/job-postings', { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .then(response => response.json())
      .then(setJobPostings)
      .catch(setError)
  }, [])

  const onSubmit = () => { }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>Create new job post</span>

            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <Stack gap={2} width={'100%'}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoFocus
                />

                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Save
                </LoadingButton>
              </Stack>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className='row'>
              {jobPostings.map((job: any) =>
                <div>
                  <div> {job.title}</div>
                  <div> {job.description}</div>
                </div>
              )}
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
