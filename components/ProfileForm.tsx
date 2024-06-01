import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container, Paper } from '@material-ui/core';
import useSWR from 'swr';
import axios from 'axios';

const ProfileSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  email: Yup.string().email('Invalid email'),
  bio: Yup.string(),
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ProfileForm = () => {
  const { data, error, mutate } = useSWR('/api/profile', fetcher);
  const [isEditing, setIsEditing] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleEdit = () => setIsEditing(!isEditing);

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        {!isEditing ? (
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Name: {data.firstname} {data.lastname}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Email: {data.email}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Bio: {data.bio}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Edit Profile
            </Button>
          </div>
        ) : (
          <Formik
            initialValues={{
              firstname: data.firstname,
              lastname: data.lastname,
              email: data.email,
              bio: data.bio || '',
            }}
            validationSchema={ProfileSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await axios.put('/api/profile', values);
                mutate(); // Refresh SWR data
                setIsEditing(false);
              } catch (error) {
                console.error('Profile update error', error);
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  name="firstname"
                  label="First Name"
                  fullWidth
                  error={touched.firstname && !!errors.firstname}
                  helperText={touched.firstname && errors.firstname}
                />
                <Field
                  as={TextField}
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  error={touched.lastname && !!errors.lastname}
                  helperText={touched.lastname && errors.lastname}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="bio"
                  label="Bio"
                  fullWidth
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  style={{ marginRight: 10 }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleEdit}
                >
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Paper>
    </Container>
  );
};

export default ProfileForm;
