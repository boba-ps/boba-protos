"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialAvatarGrantRecord = exports.TrialAvatarGrantRecord_GrantReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum TrialAvatarGrantRecord.GrantReason
 */
var TrialAvatarGrantRecord_GrantReason;
(function (TrialAvatarGrantRecord_GrantReason) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: GRANT_BY_QUEST = 1;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_QUEST"] = 1] = "GRANT_BY_QUEST";
    /**
     * @generated from protobuf enum value: GRANT_BY_TRIAL_AVATAR_ACTIVITY = 2;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_TRIAL_AVATAR_ACTIVITY"] = 2] = "GRANT_BY_TRIAL_AVATAR_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_DUNGEON_ELEMENT_CHALLENGE = 3;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_DUNGEON_ELEMENT_CHALLENGE"] = 3] = "GRANT_BY_DUNGEON_ELEMENT_CHALLENGE";
    /**
     * @generated from protobuf enum value: GRANT_BY_MIST_TRIAL_ACTIVITY = 4;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_MIST_TRIAL_ACTIVITY"] = 4] = "GRANT_BY_MIST_TRIAL_ACTIVITY";
    /**
     * @generated from protobuf enum value: GRANT_BY_SUMO_ACTIVITY = 5;
     */
    TrialAvatarGrantRecord_GrantReason[TrialAvatarGrantRecord_GrantReason["GRANT_BY_SUMO_ACTIVITY"] = 5] = "GRANT_BY_SUMO_ACTIVITY";
})(TrialAvatarGrantRecord_GrantReason = exports.TrialAvatarGrantRecord_GrantReason || (exports.TrialAvatarGrantRecord_GrantReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class TrialAvatarGrantRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("TrialAvatarGrantRecord", [
            { no: 1, name: "grant_reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "from_parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { grantReason: 0, fromParentQuestId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 grant_reason */ 1:
                    message.grantReason = reader.uint32();
                    break;
                case /* uint32 from_parent_quest_id */ 2:
                    message.fromParentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 grant_reason = 1; */
        if (message.grantReason !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.grantReason);
        /* uint32 from_parent_quest_id = 2; */
        if (message.fromParentQuestId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.fromParentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TrialAvatarGrantRecord
 */
exports.TrialAvatarGrantRecord = new TrialAvatarGrantRecord$Type();
