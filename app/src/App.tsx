import { LoadingButton } from '@mui/lab'
import { Box, Button, CircularProgress, Paper, Stack, TextField } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import JobPostingsList from './components/JobPostingsList'
import createNewJobPosting from './lib/createNewJobPosting'
import postTest from './lib/createNewJobPosting'


const theme = createTheme()


function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
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
                  onChange={e => setTitle(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoFocus
                />

                <TextField
                  onChange={e => setDescription(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoFocus
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    createNewJobPosting(title, description)
                  }}
                >
                  Save
                </Button>
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
            <JobPostingsList />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
