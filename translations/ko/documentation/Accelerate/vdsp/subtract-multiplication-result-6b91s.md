---
source_path: "documentation/Accelerate/vdsp/subtract-multiplication-result-6b91s.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/subtract-multiplication-result-6b91s"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:subtractmultiplicationresult:0000:0001">subtract(multiplication:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtractmultiplicationresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtractmultiplicationresult:0002:0001">Calculates the single-precision element-wise difference of a vector and the product of two vectors.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtractmultiplicationresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func subtract<S, T, U, V>(multiplication: (a: T, b: U), _ vector: S, result: inout V) where S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, S.Element == Float, T.Element == Float, U.Element == Float, V.Element == Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This function calculates the products of the first <code>N</code> elements of <code>A</code> and <code>B</code>, subtracts each product from the corresponding value in <code>C</code>, and writes the result to <code>D</code>.</span>

```swift
 for (n = 0; n < N; ++n)
    D[n] = (A[n] * B[n]) - C[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">![A diagram showing the operation of this function.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">There are four rows.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The top row represents the input vectors, A and B, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">The second row represents the operation that multiplies A and B, as well as the input vector C, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">The third row represents the subtraction operation as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">The bottom row represents the output vector D as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0007">The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://docs-assets.developer.apple.com/published/9a514717c6dc246e1775caf6b56eec5a/media-4336999%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The following code shows an example of using this function:</span>

```swift
    let count = 5
    
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: [Float] = [ 5,  4,  3,  2,  1]
    
    let d = [Float](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.subtract(multiplication: (a, b), 
                      c,
                      result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[5.0, 36.0, 87.0, 158.0, 249.0]".
    print(d)

```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>multiplication</code>: A tuple that contains the vectors <code>A</code> and <code>B</code> in <code>D = (A * B) - C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>vector</code>: The input vector <code>C</code> in <code>D = (A * B) - C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: The output vector <code>D</code> in <code>D = (A * B) - C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosessionportdescription/channels.md">static let copyright: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">저작권 문구를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosequencer/infodictionarykey/genre.md">static let genre: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">장르를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosequencer/infodictionarykey/lyricist.md">static let lyricist: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">작사가를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosequencer/infodictionarykey/tracknumber.md">static let trackNumber: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">트랙 번호를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosequencer/infodictionarykey/subtitle.md">static let subTitle: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">부제목을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiosequencer/infodictionarykey/year.md">static let year: AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">연도를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func subtract&lt;T, U&gt;(multiplication: (a: U, b: Double), T) -&gt; [Double]](vdsp/subtract(multiplication:_:)-2hhme.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func subtract&lt;S, T, U&gt;(multiplication: (a: T, b: U), S) -&gt; [Double]](vdsp/subtract(multiplication:_:)-9gphg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Returns the double-precision element-wise difference of a vector and the product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func subtract&lt;T, U&gt;(multiplication: (a: U, b: Float), T) -&gt; [Float]](vdsp/subtract(multiplication:_:)-3zm6l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func subtract&lt;S, T, U&gt;(multiplication: (a: T, b: U), S) -&gt; [Float]](vdsp/subtract(multiplication:_:)-6u3sp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Returns the single-precision element-wise difference of a vector and the product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;T, U, V&gt;(multiplication: (a: U, b: Double), T, result: inout V)</a>-9p12h.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the double-precision element-wise difference of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;T, U, V&gt;(multiplication: (a: U, b: Float), T, result: inout V)</a>-86gx3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the single-precision element-wise difference of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;S, T, U, V&gt;(multiplication: (a: T, b: U), S, result: inout V)</a>-3f2bw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Calculates the double-precision element-wise difference of a vector and the product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func subtract&lt;R, S, T, U&gt;(multiplication: (a: T, b: U), multiplication: (c: R, d: S)) -&gt; [Double]](vdsp/subtract(multiplication:multiplication:)-22a4b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the double-precision element-wise difference of the products of two pairs of vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func subtract&lt;R, S, T, U&gt;(multiplication: (a: T, b: U), multiplication: (c: R, d: S)) -&gt; [Float]](vdsp/subtract(multiplication:multiplication:)-1ghyu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the single-precision element-wise difference of the products of two pairs of vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/subtract(multiplication:_:result:">View on Apple Developer</a>-6b91s)*</span>
