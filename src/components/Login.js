import React from 'react'
import { useState } from 'react'
import { Button, TextField, Box, Card, CardContent, Typography } from '@mui/material'
import useForm from '../hooks/useForm'
//import Center from './Center'

export default function Login() {
    const {values,
        setValues,
        errors,
        setErrors, 
        handleInputChange } = useForm();
    return (
        //<Center>
         <Card sx={{width:400}}>
                <CardContent sx={{textAlign:'center'}}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                    Quiz Application</Typography>
            <Box sx={{
            '& .MuiTextField-root': {
                m: 1,
                width:'90%'
            }
      }}>
      <form noValidate>
          <TextField
              label="Email"
              name="email"
              variant="outlined"
          />
           <TextField
              label="Name"
              name="name"
              variant="outlined"
          />
          <Button 
              type="submit"
              variant="contained"
                    size="large"
                sx={{width:'90%'}}>Start</Button>
            </form>
            </Box>
            </CardContent></Card>
        //</Center>
       
        
    )
    
}
