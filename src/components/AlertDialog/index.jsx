import { Button } from '../Button';

import { Container } from "./styles";

export function AlertDialog({ title, description, onClick, isVisible = false }) {
  return isVisible ? (
    <Container>
      <div className='alertDialogContent'>
        <h2>{title}</h2>

        <p>{description}</p>

        <div className='buttonsWrapper'>
          <Button 
            title="Cancelar"
            className="cancel"
            onClick={() => onClick(false)}
          />

          <Button 
            title="Sim"
            className="light"
            onClick={() => onClick(true)}
          />
        </div>
      </div>
    </Container>
  ) : null;
};