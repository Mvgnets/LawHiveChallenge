import { Box, Button, InputAdornment, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useState } from 'react'
import JobPostingsList from './components/JobPostingsList'
import createNewJobPosting from './lib/createNewJobPosting'


const theme = createTheme()


function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [feeStructure, setFeeStructure] = React.useState('fixedFee');
  const [feeAmount, setFeeAmount] = useState(0)

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFeeStructure: string,
  ) => {
    setFeeStructure(newFeeStructure);
  };

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

                <ToggleButtonGroup
                  color="primary"
                  value={feeStructure}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value="fixedFee">Fixed Fee</ToggleButton>
                  <ToggleButton value="noWinNoFee">No Win No Fee</ToggleButton>
                </ToggleButtonGroup>

                <TextField
                  onChange={e => setFeeAmount(parseFloat(e.target.value))}
                  margin="normal"
                  required
                  fullWidth
                  id="feeAmount"
                  label={feeStructure === 'fixedFee' ? "Fee Amount" : "Fee Percentage"}
                  name="feeAmount"
                  autoFocus
                  InputProps={feeStructure === 'fixedFee' ? {
                    startAdornment: <InputAdornment position="start">£</InputAdornment>,
                  } : {
                    endAdornment: < InputAdornment position="end" >%</InputAdornment>
                  }}
                />

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    createNewJobPosting(title, description, feeStructure, feeAmount);
                    alert('New Job Created');
                    window.location.reload();
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
    </ThemeProvider >
  )
}

export default App
