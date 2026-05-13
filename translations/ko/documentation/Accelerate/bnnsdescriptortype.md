---
source_path: "documentation/Accelerate/bnnsdescriptortype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdescriptortype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdescriptortype:0000:0001">BNNSDescriptorType</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdescriptortype:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdescriptortype:0002:0001">산술 연산의 입력 및 출력 유형을 설명하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdescriptortype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdescriptortype:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSDescriptorType
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:descriptor-types:0008:0001">Descriptor 유형</span>

- <span class="ko-segment" data-segment-id="seg:list:descriptor-types:0009:0001"><a href="bnnsdescriptortype/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:descriptor-types:0009:0002"><a href="bnnsdescriptortype/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:descriptor-types:0009:0003"><a href="bnnsdescriptortype/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:descriptor-types:0009:0004"><a href="bnnsconstant.md">var BNNSConstant: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:descriptor-types:0010:0001">그래디언트가 없는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:descriptor-types:0011:0001"><a href="bnnsparameter.md">var BNNSParameter: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:descriptor-types:0012:0001">가중치나 편향과 같이 학습 가능한 매개변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:descriptor-types:0013:0001"><a href="bnnssample.md">var BNNSSample: BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:descriptor-types:0014:0001">입력 또는 출력과 같은 샘플입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0015:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0016:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0005"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnns/unaryarithmeticlayer.md">class UnaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">단항 산술 필터를 래핑하고 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnns/binaryarithmeticlayer.md">class BinaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">이항 산술 필터를 래핑하고 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnns/ternaryarithmeticlayer.md">class TernaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">삼항 산술 필터를 래핑하고 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsarithmeticunary.md">struct BNNSArithmeticUnary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">단일 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsarithmeticbinary.md">struct BNNSArithmeticBinary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">두 개의 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsarithmeticternary.md">struct BNNSArithmeticTernary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">세 개의 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnsarithmeticfunction.md">struct BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">산술 연산을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnslayerparametersarithmetic.md">struct BNNSLayerParametersArithmetic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">산술 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnnsfiltercreatelayerarithmetic(_:_:">func BNNSFilterCreateLayerArithmetic(UnsafePointer&lt;BNNSLayerParametersArithmetic&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">새로운 산술 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnsarithmeticfilterapplybatch(_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer&gt;, UnsafePointer&lt;Int&gt;, UnsafeMutableRawPointer, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">산술 필터를 입력 객체 집합에 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnnsarithmeticfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBackwardBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer?&gt;?, UnsafePointer&lt;Int&gt;?, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafePointer&lt;Int&gt;, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">입력 그래디언트를 생성하기 위해 산술 필터를 역방향으로 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdescriptortype">View on Apple Developer</a>*</span>
