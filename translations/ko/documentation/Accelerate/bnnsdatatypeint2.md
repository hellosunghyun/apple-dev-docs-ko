---
source_path: "documentation/Accelerate/bnnsdatatypeint2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatatypeint2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatatypeint2:0000:0001">BNNSDataTypeInt2</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatatypeint2:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatatypeint2:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatatypeint2:0003:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
var BNNSDataTypeInt2: BNNSDataType { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0006:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0007:0001">저장 데이터 타입입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">부동 소수점 타입과 공통 비트를 갖기 때문에 이 상수는 유효한 타입이 아닙니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">16비트 반정밀 부동 소수점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">32비트 단정밀도 부동 소수점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">16비트 brain floating Point입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">부호 있는 정수 타입과 공통 비트를 갖기 때문에 이 상수는 유효한 타입이 아닙니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">8비트 부호 있는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">16비트 부호 있는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">32비트 부호 있는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">64비트 부호 있는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0001">부호 없는 정수 타입과 공통 비트를 갖기 때문에 이 상수는 유효한 타입이 아닙니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0018:0001">8비트 부호 없는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0019:0001">16비트 부호 없는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0020:0001">32비트 부호 없는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0021:0001">64비트 부호 없는 정수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0022:0001">인덱싱된 부동 소수점 타입과 공통 비트를 갖기 때문에 이 상수는 유효한 타입이 아닙니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0023:0001">부동 소수점 변환 테이블(4개 값)에 대한 2비트 부호 없는 인덱스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0024:0001">부동 소수점 변환 테이블(16개 값)에 대한 4비트 부호 없는 인덱스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0025:0001">부동 소수점 변환 테이블(256개 값)에 대한 8비트 부호 없는 인덱스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0026:0001">기타 타입과 공통 비트를 갖기 때문에 이 상수는 유효한 타입이 아닙니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0027:0001">bool 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0028:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsdatatypebfloat16.md">var BNNSDataTypeBFloat16: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0002"><a href="bnnsdatatypeboolean.md">var BNNSDataTypeBoolean: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0003"><a href="bnnsdatatypeindexed1.md">var BNNSDataTypeIndexed1: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0004"><a href="bnnsdatatypeindexed2.md">var BNNSDataTypeIndexed2: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0005"><a href="bnnsdatatypeindexed4.md">var BNNSDataTypeIndexed4: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0006"><a href="bnnsdatatypeint1.md">var BNNSDataTypeInt1: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0007"><a href="bnnsdatatypeint4.md">var BNNSDataTypeInt4: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0008"><a href="bnnsdatatypeint64.md">var BNNSDataTypeInt64: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0009"><a href="bnnsdatatypemiscellaneousbit.md">var BNNSDataTypeMiscellaneousBit: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0010"><a href="bnnsdatatypeuint1.md">var BNNSDataTypeUInt1: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0011"><a href="bnnsdatatypeuint2.md">var BNNSDataTypeUInt2: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0012"><a href="bnnsdatatypeuint3.md">var BNNSDataTypeUInt3: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0013"><a href="bnnsdatatypeuint4.md">var BNNSDataTypeUInt4: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0014"><a href="bnnsdatatypeuint6.md">var BNNSDataTypeUInt6: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0015"><a href="bnnsdatatypeuint64.md">var BNNSDataTypeUInt64: BNNSDataType</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatatypeint2">View on Apple Developer</a>*</span>
