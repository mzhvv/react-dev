export const LoadingFallback: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className='bg-background flex h-svh flex-col items-center justify-center gap-2'>
      <span
        role='status'
        aria-live='polite'
        className='text-foreground animate-pulse text-xl leading-tight'
      >
        {message}
      </span>
    </div>
  )
}
