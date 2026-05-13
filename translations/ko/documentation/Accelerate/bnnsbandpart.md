---
source_path: "documentation/Accelerate/bnnsbandpart.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsbandpart"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsbandpart:0000:0001">BNNSBandPart(_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsbandpart:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsbandpart:0002:0001">행렬의 지정된 하위 대각선과 상위 대각선을 복사하고 나머지 요소를 0으로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsbandpart:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbandpart:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSBandPart(_ num_lower: Int32, _ num_upper: Int32, _ input: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use <a href="bnnsbandpart(_:_:_:_:_:">@@TOKEN_0@@</a>.md) to copy a tensor’s main diagonal and zero or more upper and lower bands.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>num_*</code> 매개변수에 음수 값을 전달하면 함수가 전체 상삼각 또는 전체 하삼각을 반환하도록 지정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">예를 들어 다음 8×8 행렬이 주어집니다.</span>

```swift
let matrixValues: [Float] = [ 11, 12, 13, 14, 15, 16, 17, 18,
                              21, 22, 23, 24, 25, 26, 27, 28,
                              31, 32, 33, 34, 35, 36, 37, 38,
                              41, 42, 43, 44, 45, 46, 47, 48,
                              51, 52, 53, 54, 55, 56, 57, 58,
                              61, 62, 63, 64, 65, 66, 67, 68,
                              71, 72, 73, 74, 75, 76, 77, 78,
                              81, 82, 83, 84, 85, 86, 87, 88 ]

var inputDescriptor = BNNSNDArrayDescriptor.allocate(
     initializingFrom: matrixValues,
     shape: .matrixRowMajor(8, 8))
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">다음 코드는 상삼각을 선택하고 다른 요소를 0으로 설정합니다.</span>

```swift
var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: inputDescriptor.shape)

BNNSBandPart(0,  // num_lower
             -1, // num_upper
             &inputDescriptor,
             &outputDescriptor, nil)

printMatrix(outputDescriptor)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">반환되면 <code>outputDescriptor</code>에 다음 값이 포함됩니다.</span>

```swift
11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0
 0.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0
 0.0,  0.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0
 0.0,  0.0,  0.0, 44.0, 45.0, 46.0, 47.0, 48.0
 0.0,  0.0,  0.0,  0.0, 55.0, 56.0, 57.0, 58.0
 0.0,  0.0,  0.0,  0.0,  0.0, 66.0, 67.0, 68.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 77.0, 78.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 88.0
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">다음 코드는 하위 대각선 4개와 상위 대각선 1개를 선택하고 다른 요소를 0으로 설정합니다.</span>

```swift
var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: inputDescriptor.shape)

BNNSBandPart(4, // num_lower
             1, // num_upper
             &inputDescriptor,
             &outputDescriptor, nil)

printMatrix(outputDescriptor)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0017:0001">반환되면 <code>outputDescriptor</code>에 다음 값이 포함됩니다.</span>

```swift
11.0, 12.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
21.0, 22.0, 23.0,  0.0,  0.0,  0.0,  0.0,  0.0
31.0, 32.0, 33.0, 34.0,  0.0,  0.0,  0.0,  0.0
41.0, 42.0, 43.0, 44.0, 45.0,  0.0,  0.0,  0.0
51.0, 52.0, 53.0, 54.0, 55.0, 56.0,  0.0,  0.0
 0.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0,  0.0
 0.0,  0.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0
 0.0,  0.0,  0.0, 84.0, 85.0, 86.0, 87.0, 88.0
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0019:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0001"><code>num_lower</code>: 함수가 복사하는 하위 대각선의 개수입니다. 음수로 설정하면 전체 하삼각을 복사합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0002"><code>num_upper</code>: 함수가 복사하는 상위 대각선의 개수입니다. 음수로 설정하면 전체 상삼각을 복사합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0003"><code>input</code>: 입력 디스크립터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0004"><code>output</code>: 출력 디스크립터에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0020:0005"><code>filter_params</code>: 필터 런타임 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/error.md">BNNS.Error</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0002"><a href="bnnsshuffle(_:_:_:_:">func BNNSShuffle(BNNSShuffleType, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">텐서의 요소를 셔플 유형에 따라 재배열합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsshuffletype.md">struct BNNSShuffleType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">셔플 유형을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnstile(_:_:_:">func BNNSTile(UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력 텐서를 여러 번 타일링하여 출력 텐서를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnstilebackward(_:_:_:">func BNNSTileBackward(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">입력 그라디언트를 생성하도록 타일 필터를 역방향으로 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsbandpart(_:_:_:_:_:">View on Apple Developer</a>)*</span>
