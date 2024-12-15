//CSS Import
import './ContainerText.css';

function ContainerText({ text}) {
  return (
    <p className='p-bg d-flex align-items-center'>
      {text}
    </p>
  );
}

export default ContainerText;
