---
source_path: "documentation/Accelerate/bnnsrandomgeneratorgetstate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsrandomgeneratorgetstate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsrandomgeneratorgetstate:0000:0001">BNNSRandomGeneratorGetState(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsrandomgeneratorgetstate:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsrandomgeneratorgetstate:0002:0001">Returns the state of a random number generator.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsrandomgeneratorgetstate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsrandomgeneratorgetstate:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSRandomGeneratorGetState(_ generator: BNNSRandomGenerator?, _ state_size: Int, _ state: UnsafeMutableRawPointer) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <code>YES</code> if the request renews previously provided response data that is expiring or has already expired.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The following code creates a random number generator and captures its initial state.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">The code calls <a href="bnnsrandomfilluniformint(_:_:_:_:">@@TOKEN_0@@</a>.md) twice and copies the random values into the arrays <code>a</code> and <code>b</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">The <a href="bnnsrandomgeneratorsetstate(_:_:_:">@@TOKEN_0@@</a>.md) function restores the generator to its initial state, and the final call to <a href="bnnsrandomfilluniformint(_:_:_:_:">@@TOKEN_1@@</a>.md) populates the descriptor so that the values in arrays <code>a</code> and <code>c</code> are equal.</span>

```swift
let data = UnsafeMutableBufferPointer<Int16>.allocate(capacity: 8)
var descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (10, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: data.baseAddress!,
                                       data_type: BNNSDataType.int16,
                                       table_data: nil,
                                       table_data_type: BNNSDataType.int16,
                                       data_scale: 1, data_bias: 0)

guard let randomNumberGenerator = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                                            nil) else {
    return
}

// Allocate memory to store state.
let stateSize = BNNSRandomGeneratorStateSize(randomNumberGenerator)
let state = UnsafeMutableRawPointer.allocate(byteCount: stateSize,
                                             alignment: 0)

// Store the random number generator's state.
BNNSRandomGeneratorGetState(randomNumberGenerator,
                            stateSize,
                            state)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let a = Array(data)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let b = Array(data)

// Set the random number generator's state to its initial state.
BNNSRandomGeneratorSetState(randomNumberGenerator,
                            stateSize,
                            state)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let c = Array(data)

print(a.elementsEqual(c)) // prints "true"

data.deallocate()
state.deallocate()
BNNSDestroyRandomGenerator(randomNumberGenerator)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>generator</code>: The random number generator.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>state_size</code>: The size of the state buffer, in bytes.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>state</code>: A pointer to the state.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/randomgenerator.md">class RandomGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지속 가능한 콘텐츠 키를 생성하거나 지속 가능한 콘텐츠 키로 이전 요청에 응답하는 데 사용되는 콘텐츠 키 요청입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="averror-swift.struct/applicationisnotauthorizedtousedevice.md">static var applicationIsNotAuthorizedToUseDevice: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">실패한 키 요청의 오류 설명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="averror-swift.struct/applicationisnotauthorized.md">static var applicationIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">키 응답을 얻기 위해 사용되는 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsrandomgeneratormethod.md">struct BNNSRandomGeneratorMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Constants that describe random number generation methods.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsrandomgenerator.md">typealias BNNSRandomGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A pointer to a random number generator object.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="averror-swift.struct/contentisprotected.md">static var contentIsProtected: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Fills the specified tensor with random integer values from the continuous uniform distribution within a range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="averror-swift.struct/contentisunavailable.md">static var contentIsUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsrandomfillnormalfloat(_:_:_:_:">func BNNSRandomFillNormalFloat(BNNSRandomGenerator?, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Fills the specified tensor with random floating-point values mapped to a normal distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsrandomfillcategoricalfloat(_:_:_:_:">func BNNSRandomFillCategoricalFloat(BNNSRandomGenerator?, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Bool) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Fills the specified tensor with random values from the categorical distributions with the given event probabilities.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsrandomgeneratorstatesize(_:">func BNNSRandomGeneratorStateSize(BNNSRandomGenerator?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Returns the state size, in bytes, of a random number generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnsrandomgeneratorsetstate(_:_:_:">func BNNSRandomGeneratorSetState(BNNSRandomGenerator?, Int, UnsafeMutableRawPointer) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Sets the state of a random number generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsdestroyrandomgenerator(_:">func BNNSDestroyRandomGenerator(BNNSRandomGenerator?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Destroys a random number generator.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsrandomgeneratorgetstate(_:_:_:">View on Apple Developer</a>)*</span>
