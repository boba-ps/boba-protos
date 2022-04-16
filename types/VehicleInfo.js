"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VehicleMember_1 = require("./VehicleMember");
// @generated message type with reflection information, may provide speed optimized methods
class VehicleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VehicleInfo", [
            { no: 1, name: "member_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VehicleMember_1.VehicleMember },
            { no: 2, name: "owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cur_stamina", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { memberList: [], ownerUid: 0, curStamina: 0 };
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
                case /* repeated VehicleMember member_list */ 1:
                    message.memberList.push(VehicleMember_1.VehicleMember.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 owner_uid */ 2:
                    message.ownerUid = reader.uint32();
                    break;
                case /* float cur_stamina */ 3:
                    message.curStamina = reader.float();
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
        /* repeated VehicleMember member_list = 1; */
        for (let i = 0; i < message.memberList.length; i++)
            VehicleMember_1.VehicleMember.internalBinaryWrite(message.memberList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 owner_uid = 2; */
        if (message.ownerUid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* float cur_stamina = 3; */
        if (message.curStamina !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.curStamina);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VehicleInfo
 */
exports.VehicleInfo = new VehicleInfo$Type();
