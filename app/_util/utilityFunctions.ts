export const generateResponse = (
  status: boolean,
  message: string,
  data = {}
) => {
  return {
    success: status,
    message: message,
    data: data,
  };
};
