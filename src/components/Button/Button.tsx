import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { ButtonSize, buttonSize } from "./buttonSize";
import { useTheme } from "@src/theme/ThemeProvider";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({
  styleSheet,
  fullWidth,
  children,
  colorVariant,
  variant,
  size,
}: ButtonProps) {
  const theme = useTheme()
  return (
    <ButtonBase
    styleSheet={{
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      // [Color + Variant]
      ...colorVariantBy(theme, colorVariant, variant),
      // [Size]
      ...buttonSize[size],
      // [FullWidth]
      ...(fullWidth && {
        alignSelf: 'initial',
      }),
      ...styleSheet,
    }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary',
};

Button.Base = ButtonBase;
