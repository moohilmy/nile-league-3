

const page = async ({ params }: { params: Promise<{ clubId: string }> }) => {
  const { clubId } = await params;
  
  return (
    <>
    {clubId}
    </>
  );
};

export default page;
