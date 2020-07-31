import * as LV2 from '../../src/level02/type-exercises';
import { ToDo } from '../../src/utils/predef';

describe('Type exercise', () => {
  describe('Person', () => {
    describe('showPerson1', () => {
      it('should return Bob as a string', () => {
        const bob: LV2.Person = { name: 'Bob', age: 50 };
        expect(LV2.showPerson1(bob)).toEqual('Bob is 50 years old');
      });
    });

    describe('showPerson2', () => {
      it('should return Bob as a string', () => {
        const bob: LV2.Person = { name: 'Bob', age: 50 };
        expect(LV2.showPerson2(bob)).toEqual('Bob is 50 years old');
      });
    });

    describe('changeName', () => {
      it('should return Sarah', () => {
        const bob: LV2.Person = { name: 'Bob', age: 50 };
        const sarah = LV2.changeName('Sarah', bob);
        expect(sarah).toEqual({ name: 'Sarah', age: 50 });
        expect(bob).toEqual({ name: 'Bob', age: 50 });
      });
    });
  });

  describe('Wallet', () => {
    describe('showWallet', () => {
      it('should return the waleet as a string', () => {
        const wallet: LV2.Wallet = { amount: 23.4 };
        expect(LV2.showWallet(wallet)).toEqual('The wallet amount is 23.4');
      });
    });

    describe('purchase', () => {
      it('should return a wallet with cost deducted', () => {
        const wallet: LV2.Wallet = { amount: 100 };
        const deducted = LV2.purchase(25, wallet);
        expect(deducted).toEqual({ ammount: 75 });
        expect(wallet).toEqual({ amount: 100 });
      });
    });
  });

  describe('Trafficlight', () => {
    describe('showTrafficLightStr', () => {
      it('should show red', () => {
        const str = LV2.showTrafficLightStr('red');
        expect(str).toEqual('The traffic light is red');
      });

      it('should show yellow', () => {
        const str = LV2.showTrafficLightStr('yellow');
        expect(str).toEqual('The traffic light is yellow');
      });

      it('should show green', () => {
        const str = LV2.showTrafficLightStr('green');
        expect(str).toEqual('The traffic light is green');
      });

      it('should return a default on other inputs', () => ToDo);

      it('should show flashing', () => ToDo);
    });

    describe('showTrafficLight', () => {
      it('should show red', () => {
        const str = LV2.showTrafficLight(LV2.TrafficLight.Red);
        expect(str).toEqual('The traffic light is red');
      });

      it('should show yellow', () => {
        const str = LV2.showTrafficLight(LV2.TrafficLight.Yellow);
        expect(str).toEqual('The traffic light is yellow');
      });

      it('should show green', () => {
        const str = LV2.showTrafficLight(LV2.TrafficLight.Green);
        expect(str).toEqual('The traffic light is green');
      });

      it('should show flashing', () => ToDo);
    });

  });


  describe('Student', ()=>{
    describe('show', ()=>{
      it('should print readable message of a student Bob', ()=>{
        const bob: LV2.PrintablePerson = new LV2.PrintableStudent('Bob', 50);
        expect(bob.print()).toEqual('Student Bob is 50 years old.')
      });
    });
  });
});
