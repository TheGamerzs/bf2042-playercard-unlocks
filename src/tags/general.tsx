function UltimateSurvivor(data: any) {
  return <p>Hi</p>;
}
function SeasonedVet(data: any) {
  return <p>Hi</p>;
}

function renderAll(data: any) {
  return (
    <>
      <UltimateSurvivor data={data} />
      <SeasonedVet data={data} />
    </>
  );
}

export default {
  renderAll,
};
