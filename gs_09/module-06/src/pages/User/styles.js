import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 30px;

  ${(props) =>
    props.loading && {
      justifyContent: 'center',
      alignItems: 'center',
    }}
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #eee;
`;

export const Name = styled.Text`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #999;
  margin-top: 4px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.TouchableOpacity`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;
