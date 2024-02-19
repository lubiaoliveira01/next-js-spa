import React, { useEffect, useState } from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import {
  ISkillProps,
  SkillService,
} from "@src/services/api/skills/SkillService";
import { ApiException } from "@src/services/api/ErrorException";
import Link from "@src/components/Link/Link";
import Select from "@src/components/Select/Select";
import { BaseComponent } from "@src/theme/BaseComponent";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }: FeedProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-50px",
        marginBottom: "50px",
        maxWidth: "683px",
        width: "100%",
        borderRadius: "8px",
        paddingVertical: "50px",
        paddingHorizontal: "32px",
        position: "relative",
        boxShadow: "0px 5px 10px 10px rgba(140,140,140,0.5)",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: "24px",
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
          src="https://github.com/lubiaoliveira01.png"
          alt="Git Hub Lúbia - Perfil"
        />
        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Link href="https://www.linkedin.com/in/l%C3%BAbia-oliveira/">
            <Icon
              name="linkedin"
              styleSheet={{ width: "50px", height: "50px" }}
            />
          </Link>
        </Box>
      </Box>

      <Text tag="h1" variant="heading4">
        Lúbia Oliveira
      </Text>
    </Box>
  );
};

Feed.Form = () => {
  const theme = useTheme();
  const [textArea, setTextArea] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [operationalSystem, setOperationalSystem] = useState("");
  const [role, setRole] = useState("");

  const selectProgrammingLanguage = [
    { name: "Angular", value: "angular" },
    { name: "React", value: "react" },
    { name: "NextJS", value: "nextJS" },
    { name: "Typescript", value: "typescript" },
    { name: "Javascript", value: "javascript" },
  ];

  const selectOperationalSystem = [
    { name: "Android", value: "android" },
    { name: "IOS", value: "ios" },
    { name: "Linux", value: "linux" },
    { name: "Mac OS", value: "macos" },
    { name: "Windows", value: "windows" },
  ];

  const selectRole = [
    { name: "Front-End", value: "frontend" },
    { name: "Back-End", value: "backend" },
    { name: "Produto", value: "produto" },
    { name: "Projeto", value: "projeto" },
    { name: "Tech Lead", value: "techlead" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Verificar console.");
    console.log(
      textArea +
        ", " +
        programmingLanguage +
        ", " +
        operationalSystem +
        ", " +
        role
    );
  };

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: "24px",
        marginBottom: "24px",
      }}
    >
      <Text
        variant="heading4"
        styleSheet={{
          marginBottom: "5px",
        }}
      >
        Formulário:
      </Text>
      <BaseComponent as="form" onSubmit={handleSubmit}>
        <Box
          styleSheet={{
            flexDirection: {
              md: "row",
              xs: "column",
            },
            justifyContent: "space-around",
            gap: "10px",
            margin: "20px 5px",
          }}
        >
          <Select
            value={programmingLanguage}
            options={selectProgrammingLanguage}
            onChange={(e) => setProgrammingLanguage(e.currentTarget.value)}
          />
          <Select
            value={operationalSystem}
            options={selectOperationalSystem}
            onChange={(e) => setOperationalSystem(e.currentTarget.value)}
          />
          <Select
            value={role}
            options={selectRole}
            onChange={(e) => setRole(e.currentTarget.value)}
          />
        </Box>
        <BaseComponent
          as="textarea"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          styleSheet={{
            color: theme.colors.neutral.x600,
            width: "80%",
            height: "100px",
            borderColor: theme.colors.neutral.x400,
            borderRadius: "5px",
            marginBottom: "20px",
            alignSelf: {
              md: "center",
              xs: "left",
            },
          }}
        />
        <Button>Enviar</Button>
      </BaseComponent>
    </Box>
  );
};

Feed.Body = () => {
  const [skills, setSkills] = useState<ISkillProps[]>([]);

  useEffect(() => {
    SkillService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setSkills(result);
      }
    });
  });

  return (
    <Box>
      <Text
        variant="heading4"
        styleSheet={{
          marginBottom: "5px",
        }}
      >
        Habilidades:
      </Text>
      {skills.map((skillItem) => {
        return (
          <Text
            tag="li"
            variant="body1"
            key={skillItem.id}
            styleSheet={{
              marginLeft: "5px",
            }}
          >
            {skillItem.skill}
          </Text>
        );
      })}
    </Box>
  );
};
