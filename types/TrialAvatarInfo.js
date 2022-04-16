"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialAvatarInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TrialAvatarGrantRecord_1 = require("./TrialAvatarGrantRecord");
const Item_1 = require("./Item");
// @generated message type with reflection information, may provide speed optimized methods
class TrialAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TrialAvatarInfo", [
            { no: 1, name: "trial_avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "trial_equip_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Item_1.Item },
            { no: 3, name: "grant_record", kind: "message", T: () => TrialAvatarGrantRecord_1.TrialAvatarGrantRecord }
        ]);
    }
    create(value) {
        const message = { trialAvatarId: 0, trialEquipList: [] };
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
                case /* uint32 trial_avatar_id */ 1:
                    message.trialAvatarId = reader.uint32();
                    break;
                case /* repeated Item trial_equip_list */ 2:
                    message.trialEquipList.push(Item_1.Item.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* TrialAvatarGrantRecord grant_record */ 3:
                    message.grantRecord = TrialAvatarGrantRecord_1.TrialAvatarGrantRecord.internalBinaryRead(reader, reader.uint32(), options, message.grantRecord);
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
        /* uint32 trial_avatar_id = 1; */
        if (message.trialAvatarId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.trialAvatarId);
        /* repeated Item trial_equip_list = 2; */
        for (let i = 0; i < message.trialEquipList.length; i++)
            Item_1.Item.internalBinaryWrite(message.trialEquipList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TrialAvatarGrantRecord grant_record = 3; */
        if (message.grantRecord)
            TrialAvatarGrantRecord_1.TrialAvatarGrantRecord.internalBinaryWrite(message.grantRecord, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TrialAvatarInfo
 */
exports.TrialAvatarInfo = new TrialAvatarInfo$Type();
