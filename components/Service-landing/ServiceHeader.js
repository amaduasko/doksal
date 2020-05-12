import { useRouter } from "next/router";

export const ServicesHeader = ({ children, headerBg }) => {
  const router = useRouter();
  const activeRoot = router.route
    .trim()
    .split("/")
    .pop();
  return (
    <div className="services-landing-header">
      {children}
      <style jsx>{`
        .services-landing-header {
          background-image: url(${headerBg ? headerBg : ""});
        }
      `}</style>
    </div>
  );
};
