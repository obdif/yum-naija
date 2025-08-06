// 📝 EXPLANATION: Reusable Button component with loading states

import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, type ViewStyle, type TextStyle } from "react-native"

interface ButtonProps {
  title: string
  onPress: () => void
  loading?: boolean
  disabled?: boolean
  variant?: "primary" | "secondary" | "outline"
  size?: "small" | "medium" | "large"
  style?: ViewStyle
  textStyle?: TextStyle
}

export const Button = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
  size = "medium",
  style,
  textStyle,
}: ButtonProps) => {
  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], styles[size], isDisabled && styles.disabled, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator size="small" color={variant === "primary" ? "#fff" : "#1a5f3f"} />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`], styles[`${size}Text`], textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  // Variants
  primary: {
    backgroundColor: "#1a5f3f",
  },
  secondary: {
    backgroundColor: "#f0f8f4",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#1a5f3f",
  },

  // Sizes
  small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 36,
  },
  medium: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    minHeight: 48,
  },
  large: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 56,
  },

  // Text styles
  text: {
    fontWeight: "600",
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#1a5f3f",
  },
  outlineText: {
    color: "#1a5f3f",
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },

  // States
  disabled: {
    opacity: 0.6,
  },
})
