import React from "react"
import Image from "next/image"
export const FeatureBody = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  return <div className="w-full p-8 bg-white dark:bg-black">{children}</div>
}
export const FeatureHead = ({ children }: { children: JSX.Element[] }) => {
  return <div className="flex items-center mb-6">{children}</div>
}
export const FeatureIcon = ({
  children,
  alt,
}: {
  children: JSX.Element | string
  alt: string
}) => {
  if (typeof children === "string")
    return (
      <Image
        width="20"
        height="20"
        src={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${children}</text></svg>`}
        alt={alt}
        className="w-6 h-6"
      />
    )
  return children
}
export const FeatureTitle = ({
  children,
}: {
  children: JSX.Element | string
}) => {
  return <div className="ml-4 text-xl">{children}</div>
}
export const FeatureContent = ({
  children,
}: {
  children: JSX.Element | string
}) => {
  return (
    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
      {children}
    </p>
  )
}
