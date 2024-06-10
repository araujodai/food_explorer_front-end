import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { PiHeartStraightBold, PiHeartFill, PiPencilSimpleDuotone } from "react-icons/pi"; 
import { RxCaretRight } from "react-icons/rx";
import imagePlaceholder from "../../assets/menu_item_image_placeholder.svg";

import { Button } from "../Button";
import { Stepper } from "../Stepper";
import { notify } from "../Notification"

import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

import { Container } from "./styles";

export function Card({ isAdmin = false, data }) {
  const [ favorite, setFavorite ] = useState(false);
  const [ quantity, setQuantity ] = useState(1);

  const { handleAddToCart } = useCart();

  const imageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;

  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  };

  async function handleRemoveAddFavorite() {
    try {
      if (favorite) {
        await api.delete(`/favorites/${data.id}`);
        setFavorite(false);
  
      } else {
        await api.post(`/favorites/${data.id}`);
        setFavorite(true);
      };

    } catch (error) {
      if (error.response) {
        notify.error(error.response.data.message);

      } else {
        notify.error("Erro ao processar a solicitação, tente novamente.");
      };
    };
  };

  useEffect(() => {
    if (!isAdmin) {
      async function fetchFavorites() {
        try {
          const response = await api.get("/favorites");
          const userFavorites = response.data;
          const isFavorite = userFavorites.some(favorite => favorite.menu_item_id === data.id);
          setFavorite(isFavorite);
  
        } catch (error) {
          if (error.response) {
            notify.error(error.response.data.message);
  
          } else {
            notify.error("Erro ao buscar pelos favoritos, tente novamente.");
          };
        };
      };
  
      fetchFavorites();
    };
  }, []);

  return (
    <Container>
      {
        !isAdmin &&
        <Button 
          variant="secondary" 
          icon={favorite ? PiHeartFill : PiHeartStraightBold} 
          size="24px"
          onClick={handleRemoveAddFavorite}
        />
      }

      {
        isAdmin &&
        <Button 
          variant="secondary" 
          icon={PiPencilSimpleDuotone} 
          size="24px"
          onClick={handleEdit}
        />
      }

      <img src={imageUrl} />

      <Link to={`/details/${data.id}`}>
        <h2>{data.name}</h2>
        <RxCaretRight />
      </Link>

      <p className="description">
        {data.description}
      </p>

      <span>
        R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>

      { !isAdmin &&
        <div className="quantityControl">
          <Stepper 
            quantity={quantity} 
            setQuantity={setQuantity}
          />

          <Button 
            title="incluir" 
            onClick={() => {
              handleAddToCart({data, quantity}); 
              setQuantity(1);
            }}
          />
        </div>
      }
    </Container>
  )
};