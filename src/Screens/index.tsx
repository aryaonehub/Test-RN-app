import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Header from '~/Components/Header';
import {data, tabs, SchemaForm} from '~/Data';
import Button from '~/Components/Button';
import ArrowDownIcon from '~/assets/Icon/chevron-down';
import InfoIcon from '~/assets/Icon/information';
import InputText from '~/Components/InputText';
import PriceInfo from '~/Components/PriceInfo';

const extractDefaultValues = (schema: Array) => {
  return schema.reduce((acc, field) => {
    acc[field.formName] = field.value || ''; // Ensure default value is an empty string if not provided
    return acc;
  }, {});
};

const Main = () => {
  const [tabActive, setTabActive] = useState(1);
  const [Buy, setBuy] = useState(true);
  const defaultValues = extractDefaultValues(SchemaForm);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues});

  const Tab = ({name, id}) => (
    <TouchableOpacity onPress={() => setTabActive(id)}>
      <View>
        <Text
          style={[
            Body.tabText,
            tabActive === id ? Body.tabActive : Body.tabInactive,
          ]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const onSubmit = data => {
    console.log(data);
  };

  const RenderForm = () => (
    <View>
      <View style={{marginBottom: 20}}>
        {SchemaForm.map(item => (
          <View key={item.id} style={Body.formItem}>
            <Controller
              control={control}
              rules={{required: item.required}}
              render={({field: {onChange, onBlur, value}}) => (
                <InputText
                  type={item.type}
                  label={item.label}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              name={item.formName}
            />
            {errors[item.formName] && (
              <Text style={Body.errorText}>This is required.</Text>
            )}
          </View>
        ))}
      </View>
      <Button
        type={Buy ? 'primary' : 'danger'}
        label={`${Buy ? 'Buy' : 'Sell'} ${data.title}`}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );

  const RenderComponents = () => {
    switch (tabActive) {
      case 1:
        return <RenderForm />;
      case 2:
        return null;
      case 3:
        return null;
      default:
        return null;
    }
  };

  const Separator = () => <View style={Body.separator} />;

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={Body.wrapper}>
          <Header data={data} />
          <View style={Body.layout}>
            <PriceInfo data={data} />
            <View style={Body.buttonContainer}>
              <View style={Body.column}>
                <Button
                  label="Buy"
                  type={Buy ? 'primary' : 'secondary'}
                  onPress={() => setBuy(true)}
                />
              </View>
              <View style={Body.column}>
                <Button
                  label="Sell"
                  type={!Buy ? 'danger' : 'secondary'}
                  onPress={() => setBuy(false)}
                />
              </View>
            </View>
            <View style={Body.tabsContainer}>
              <FlatList
                data={tabs}
                horizontal={true}
                renderItem={({item}) => (
                  <Tab name={item.name} key={item.id} id={item.id} />
                )}
                ItemSeparatorComponent={Separator}
                ListFooterComponent={
                  <ArrowDownIcon
                    width={10}
                    height={10}
                    style={{...Body.arrowIcon, margin: 'auto'}}
                  />
                }
              />
              <InfoIcon width={14} height={14} style={Body.arrowIcon} />
            </View>
            <View style={{...Body.textContainer, ...Body.row}}>
              <Text style={Body.balanceLabel}>Available balance</Text>
              <Text style={Body.balance}>
                {data.balance.price} {data.balance.unit}
              </Text>
            </View>
            <RenderComponents />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Main;

const Body = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  layout: {
    width: '100%',
    top: 23,
    paddingRight : 15,
    paddingLeft : 15,
    gap: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingRight : 15,
   /*  paddingLeft : 15, */
    gap: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tabText: {
    fontFamily: 'Supreme Variable',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.4,
    textAlign: 'left',
  },
  tabActive: {
    color: '#F8FCFF',
  },
  tabInactive: {
    color: '#A4ABB7',
  },
  separator: {
    width: 20,
  },
  arrowIcon: {
    marginLeft: 10,
  },
  textContainer: {
    width: 239,
    height: 15,
    gap: 8,
  },
  balanceLabel: {
    fontFamily: 'Supreme Variable',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#838B98',
  },
  balance: {
    fontFamily: 'Supreme Variable',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  formItem: {
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },

  row: {
    flexDirection: 'row',
    rowGap: 24,
  },
  column: {
    width: '50%',
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});
