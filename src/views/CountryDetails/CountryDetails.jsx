import React from "react";
import ButtonBase from "../../components/common/ButtonBase";
import useScrollTop from "../../hooks/useScrollTop";
import {
  ContentStyle,
  DescriptionContainerStyle,
  FlagContainerStyle,
  FlagImageStyle,
  ListDetails,
  ListItemDetail,
  ListItemOption,
  ListItemResponse,
  TitleStyle,
  CountryButtonBack,
} from "./countryDetails.style";

const CountryDetails = ({
  img,
  country,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
}) => {
  useScrollTop();
  return (
    <div>
      <CountryButtonBack />
      <ContentStyle>
        <FlagContainerStyle>
          <FlagImageStyle
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
            }
          />
        </FlagContainerStyle>
        <DescriptionContainerStyle>
          <TitleStyle>Belgium</TitleStyle>
          <ListDetails>
            <ListItemDetail>
              <ListItemOption>Native Name:</ListItemOption>
              <ListItemResponse>Belgie</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Top Level Domain:</ListItemOption>
              <ListItemResponse>be</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Population:</ListItemOption>
              <ListItemResponse>11.319.511</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Currencies:</ListItemOption>
              <ListItemResponse>Euro</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Region:</ListItemOption>
              <ListItemResponse>Europe</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Languages:</ListItemOption>
              <ListItemResponse>Dutch, French, German</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Sub Región:</ListItemOption>
              <ListItemResponse>Westem Europe</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Capital:</ListItemOption>
              <ListItemResponse>Brussels</ListItemResponse>
            </ListItemDetail>
          </ListDetails>
          <ListDetails noMargin>
            <ListItemDetail block noMargin>
              <ListItemOption>Border Countries:</ListItemOption>
              <ListItemResponse>
                <ButtonBase
                  className="borderCountry"
                  toHref="/countries/France"
                >
                  France
                </ButtonBase>
                <ButtonBase
                  className="borderCountry"
                  toHref="/countries/Germany"
                >
                  Germany
                </ButtonBase>
                <ButtonBase
                  className="borderCountry"
                  toHref="/countries/Netherlands"
                >
                  Netherlands
                </ButtonBase>
              </ListItemResponse>
            </ListItemDetail>
          </ListDetails>
        </DescriptionContainerStyle>
      </ContentStyle>
    </div>
  );
};

export default CountryDetails;
