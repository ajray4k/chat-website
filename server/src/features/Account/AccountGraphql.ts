import { Field, ObjectType } from "type-graphql";
import { BaseGraphql } from "../../objects/BaseGraphql";
import { ChatGraphql } from "../Chat/ChatGraphql";
import { InviteRequestGraphql } from "../InviteRequest/InviteRequestGraphql";
import { RoomGraphql } from "../Room/RoomGraphql";

@ObjectType()
export class AccountGraphql extends BaseGraphql {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;

  @Field(() => [RoomGraphql])
  rooms!: RoomGraphql[];

  @Field(() => [ChatGraphql])
  chats!: ChatGraphql[];

  @Field(() => [InviteRequestGraphql])
  inviteRequestsSent!: InviteRequestGraphql[];

  @Field(() => [InviteRequestGraphql])
  inviteRequestsReceived!: InviteRequestGraphql[];
}
