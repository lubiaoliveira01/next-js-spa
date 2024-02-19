import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";

interface OptionsSelectProps {
  name: string;
  value: string;
}

interface SelectProps {
  value?: string;
  options?: OptionsSelectProps[];
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  styleSheet?: StyleSheet;
}

export default function Select({ value, options, onChange, ...props }: SelectProps) {
  const theme = useTheme()

  return (
    <BaseComponent as="select" onChange={onChange} {...props}
    styleSheet={{
      color: theme.colors.neutral.x600,
      width: {
        md: '15%',
        xs: '100px'
      },
      borderColor: theme.colors.neutral.x400,
      borderRadius: '5px'
    }}>
      <BaseComponent as="option" value="">Selecione:</BaseComponent>
      {options.map((option) => (
        <BaseComponent as="option" key={option.value} value={option.value}>{option.name}</BaseComponent>
      ))}
    </BaseComponent>
  );
}
