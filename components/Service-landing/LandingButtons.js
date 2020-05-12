import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Button, ButtonGroup } from "reactstrap";
export const HeaderBtn = ({ active, to, onClick, children }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <Button
        className={`rounded-pill services-header-button ${
          active || router.route === to ? "services-header-button-active" : ""
        }`}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
};

export const LandingHeaderButtonGroup = ({ children }) => (
  <Container>
    <ButtonGroup className="services-header-button-group-container">
      {children}
    </ButtonGroup>
  </Container>
);
