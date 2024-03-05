export default function Error({text}:{text:string})
{
  return (text==""?"": <div className="*:rounded-full *:border *:border-red-600 *:bg-red-50 *:px-2 *:py-0.5 dark:text-red-600 dark:*:border-red-500/15 dark:*:bg-red-500/10 max-w-sm mx-auto my-10 mb-4">
  <h1 className="pb-0 py-0 text-center text-md">{text}</h1>
</div>)
}