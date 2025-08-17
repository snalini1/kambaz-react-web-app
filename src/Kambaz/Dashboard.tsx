import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS1234 React JS",
      description: "Full Stack Development",
      image: "/images/reactjs.jpg",
    },
    {
      id: "2345",
      title: "CS2345 Node.js",
      description: "Server-Side Programming",
      image: "/images/nodejs.jpg",
    },
    {
      id: "3456",
      title: "CS3456 MongoDB",
      description: "NoSQL Databases",
      image: "/images/mongodb.jpg",
    },
    {
      id: "4567",
      title: "CS4567 JavaScript",
      description: "Frontend Fundamentals",
      image: "/images/javascript.jpg",
    },
    {
      id: "5678",
      title: "CS5678 TypeScript",
      description: "Typed JS for React",
      image: "/images/typescript.jpg",
    },
    {
      id: "6789",
      title: "CS6789 Git & GitHub",
      description: "Version Control Basics",
      image: "/images/github.jpg",
    },
    {
      id: "7890",
      title: "CS7890 HTML & CSS",
      description: "Web Foundations",
      image: "/images/htmlcss.jpg",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} style={{ minWidth: "250px", maxWidth: "270px" }}>
              <Card className="h-100">
                <Link
                  to={`/Kambaz/Courses/${course.id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>
                    <Card.Text
                      className="overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}