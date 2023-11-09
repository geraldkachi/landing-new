import { Input, Button } from "arvara-pckage"

interface Props {
  openSuccessModal?: () => void;
}

export const PasswordForm = ({openSuccessModal}: Props) => {
  return (
    <section className="mt-20">
      <form>
        <Input label="BVN" placeholder="Enter your BVN" value="" className="mt-5" />
        <div className="mt-10">
          <Button type="button" className="w-full" onClick={openSuccessModal}>
            Process
          </Button>
        </div>
      </form>
    </section>
  )
}
