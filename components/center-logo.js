import Image from "next/image";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenterLogo = () => {
  const fullLogo = `/images/full-logo.svg`;

  return (
    <div>
      <LogoBox>
        <Image
          borderRadius="full"
          src={fullLogo}
          alt="Full Logo"
          width={400}
          height={400}
        />
      </LogoBox>
    </div>
  );
};

export default CenterLogo;
