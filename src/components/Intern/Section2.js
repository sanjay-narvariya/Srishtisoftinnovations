import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography, Box } from '@mui/material';

export default function Section2() {
  return (
    <Container fluid className="px-4 py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {/* Section Title */}
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            How we differ from others ?
          </Typography>

          {/* Point 1 */}
          <Box mb={4}>
            <Typography variant="subtitle1" sx={{ color: '#2980b9', fontWeight: 'bold' }}>
              Evaluate your professional reputation
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Having the right training at the right time can mean the difference between your current job and earning that promotion.
            </Typography>
          </Box>

          {/* Point 2 */}
          <Box mb={4}>
            <Typography variant="subtitle1" sx={{ color: '#2980b9', fontWeight: 'bold' }}>
              Enrich and develop your skills with the latest technology
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              In today's fast-paced business world, keeping your skill set current is especially crucial to make your job safety net wider. Learn new app development skills for your career and become better at it with professional app development opportunities and practice.nd financial gains.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Your earning potential will be determined by several factors, but your commitment to professional development and enhancement of your skills will certainly be one of them. As you increase your value to an employer, you will boost the prospects of earning a higher salary as well.
            </Typography>
          </Box>

          {/* Point 3 */}
          <Box mb={4}>
            <Typography variant="subtitle1" sx={{ color: '#2980b9', fontWeight: 'bold' }}>
              Experience
            </Typography>
            <Typography variant="body2" color="textSecondary">
              It’s a time where companies are asking for experience before your first job. So it's better for you to get some real time experience working in the live projects with expert developers. Nevertheless, it should not be neglected. This is the right time for you to develop your skills because mobile is the present.
            </Typography>
          </Box>

          {/* Point 4 */}
          <Box mb={4}>
            <Typography variant="subtitle1" sx={{ color: '#2980b9', fontWeight: 'bold' }}>
              Increase marketability
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Professional development benefits both employers and employees. Any time you consider your career or company goals, remember that skills enhancement can affect a person's future at a multitude of levels.
            </Typography>
          </Box>

          {/* Point 5 */}
          <Box mb={4}>
            <Typography variant="subtitle1" sx={{ color: '#2980b9', fontWeight: 'bold' }}>
              Add more accountability and success
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Think beyond job-specific knowledge. Much like when you are interviewing for a new job, your employer wants to know what abilities you could bring to an increased role in the workplace. Sharpen your technical skills through our iOS & Android training courses.
            </Typography>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
