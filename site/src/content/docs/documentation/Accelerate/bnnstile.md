---
source_path: "documentation/Accelerate/bnnstile.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnstile"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnstile:0000:0001">BNNSTile(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnstile:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnstile:0002:0001">입력 텐서를 여러 번 타일링하여 출력 텐서를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnstile:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnstile:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSTile(_ input: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="bnnstile(_:_:_:">@@TOKEN_0@@</a>.md) 함수를 사용해 입력 텐서의 타일 복사본을 반복하여 텐서를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">출력 텐서의 차원은 입력 텐서의 해당 차원의 정수 배수여야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">예를 들어 아래 코드는 2 x 3 행렬을 첫 번째 차원에서 3회, 두 번째 차원에서 2회 타일링합니다.</span>

```swift
let values: [Float] = [1.0, 2.0, 3.0,
                       4.0, 5.0, 6.0]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: values,
    shape: .matrixRowMajor(2, 3))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .matrixRowMajor(6, 6))

BNNSTile(&inputDescriptor, &outputDescriptor, nil)

inputDescriptor.deallocate()
outputDescriptor.deallocate()
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">반환되면 <code>outputDescriptor</code>에 다음 값이 포함됩니다.</span>

```swift
[ 1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0,

  1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0,

  1.0, 2.0, 3.0,  1.0, 2.0, 3.0,
  4.0, 5.0, 6.0,  4.0, 5.0, 6.0 ]
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>input</code>: 입력 디스크립터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>output</code>: 출력 디스크립터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>filter_params</code>: 필터 런타임 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/error.md">BNNS.Error</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002"><a href="bnnsbandpart(_:_:_:_:_:">func BNNSBandPart(Int32, Int32, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">행렬의 지정한 하위 대각선과 상위 대각선을 복사하고 다른 모든 요소를 0으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsshuffle(_:_:_:_:">func BNNSShuffle(BNNSShuffleType, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">텐서의 요소를 셔플 유형에 따라 재배열합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsshuffletype.md">struct BNNSShuffleType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">셔플 유형을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnstilebackward(_:_:_:">func BNNSTileBackward(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력 그라디언트를 생성하기 위해 타일 필터 역방향 연산을 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnstile(_:_:_:">Apple Developer에서 보기</a>)*</span>
