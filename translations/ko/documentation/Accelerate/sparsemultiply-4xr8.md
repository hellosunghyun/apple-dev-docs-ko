---
source_path: "documentation/Accelerate/sparsemultiply-4xr8.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsemultiply-4xr8"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsemultiply:0000:0001">SparseMultiply(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0002:0001">Perform the multiply operation <code>y = Subfactor * x</code> for complex float values..</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Complex_Float, _ X: DenseVector_Complex_Float, _ Y: DenseVector_Complex_Float, _ workspace: UnsafeMutableRawPointer)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>sbuf</code>: <code>CMSampleBufferRef</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>completionHandler</code>: 샘플 버퍼의 데이터가 준비되었거나 오류가 발생할 때 호출되는 완료 블록입니다. 데이터가 샘플 버퍼에 대해 읽히면 <code>dataReady</code> 인수는 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>입니다. 오류가 발생하면 <code>error</code> 인수에 <code>NSError</code> 객체가 포함됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Double, DenseVector_Double, UnsafeMutableRawPointer)</a>-9tahm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">샘플이 partial sync 샘플인지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Float, DenseVector_Float, UnsafeMutableRawPointer)</a>-4u1y3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Performs the multiply operation *Y = Subfactor * X* on a vector of single-precision values *X*, in place and without any internal memory allocations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsemultiply(_:_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Double, DenseVector_Double, DenseVector_Double, UnsafeMutableRawPointer)</a>-1ooyi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Performs the multiply operation *Y = Subfactor * X* on a vector of double-precision values *X*, without any internal memory allocations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsemultiply(_:_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Float, DenseVector_Float, DenseVector_Float, UnsafeMutableRawPointer)</a>-3l60d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Performs the multiply operation *Y = Subfactor * X* on a vector of double-precision values *X*, without any internal memory allocations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Double, DenseVector_Complex_Double, UnsafeMutableRawPointer)</a>-5etjg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Perform the multiply operation <code>y = Subfactor * x</code> in place for complex double values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Float, DenseVector_Complex_Float, UnsafeMutableRawPointer)</a>-5kh07.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Perform the multiply operation <code>y = Subfactor * x</code> in place for complex float values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsemultiply(_:_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Double, DenseVector_Complex_Double, DenseVector_Complex_Double, UnsafeMutableRawPointer)</a>-7xipz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayer/playimmediately(atrate:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsemultiply(_:_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, UnsafeMutableRawPointer)</a>-9v0nu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Perform the multiply operation <code>Y = Subfactor * X</code> for complex double values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:_:">View on Apple Developer</a>-4xr8)*</span>
