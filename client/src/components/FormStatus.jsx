export default function FormStatus({ status }) {
  if (!status.message) return null;
  return <p className={`form-status ${status.type}`}>{status.message}</p>;
}
