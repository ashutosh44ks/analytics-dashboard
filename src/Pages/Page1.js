import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Input, Button } from "reactstrap";

const Page1 = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="login">
      <Card className="p-4">
        <CardTitle tag="h3">Login</CardTitle>

        <CardBody>
          <CardText>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                navigate("/analytics-dashboard/dashboard");
              }}
            >
              <div className="form-group">
                <h6>Email</h6>
                <Input
                  type="email"
                  className="my-2"
                  placeholder="Enter your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <h6>Password</h6>

                <Input
                  type="password"
                  className="my-2"
                  placeholder="Enter your Password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </div>
              <Button type="submit" value="Submit" className="bg-green">
                Submit
              </Button>
            </form>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page1;
