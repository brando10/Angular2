import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent{
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.marthen.com',
    'Ruby on Rails', 150, 120, 15, 'marthen@mail.com')
  proposalTwo: Proposal = new Proposal(15, 'XAY Company', 'http://portfolio.marthen.com',
    'Ruby on Rails', 150, 120, 15, 'marthen@mail.com')
  proposalThree: Proposal = new Proposal(15, 'BBB Company', 'http://portfolio.marthen.com',
    'Ruby on Rails', 150, 120, 15, 'marthen@mail.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
