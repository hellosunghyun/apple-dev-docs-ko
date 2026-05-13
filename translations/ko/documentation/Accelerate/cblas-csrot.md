---
source_path: "documentation/Accelerate/cblas-csrot.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-csrot"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblascsrot:0000:0001">cblas_csrot(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascsrot:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascsrot:0002:0001">Applies a Givens rotation matrix to a pair of complex vectors.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascsrot:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascsrot:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_csrot(_ N: __LAPACK_int, _ X: OpaquePointer?, _ INCX: __LAPACK_int, _ Y: OpaquePointer?, _ INCY: __LAPACK_int, _ C: Float, _ S: Float)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>N</code>: The number of elements in vectors <code>X</code> and <code>Y</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>X</code>: Vector <code>X</code>. Modified on return.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>Y</code>: Vector <code>Y</code>. Modified on return.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0005"><code>INCY</code>: Stride within <code>Y</code>. For example, if <code>incY</code> is 7, every 7th element is used.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0006"><code>C</code>: The value <code>cos(θ)</code> in the Givens rotation matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0007"><code>S</code>: The value <code>sin(θ)</code> in the Givens rotation matrix.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">대형 방 환경의 음향 특성을 가진 리버브를 나타내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="cblas_ccopy(_:_:_:_:_:">func cblas_ccopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">중간 크기 홀 환경의 음향 특성을 가진 리버브를 나타내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitmidiinstrument/sendmidievent(_:data1:data2:">func sendMIDIEvent(UInt8, data1: UInt8, data2: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 개의 데이터 바이트를 포함하는 MIDI 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitmidiinstrument/sendmidisysexevent(_:">func sendMIDISysExEvent(Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">MIDI System Exclusive 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitmidiinstrument/sendpressure(_:onchannel:">func sendPressure(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">MIDI 채널 압력 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriterinput/respondtoeachpassdescription(on:using:">func sendPressure(forKey: UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">MIDI Polyphonic key pressure 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:onchannel:">func sendProgramChange(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">MIDI Program Change 및 Bank Select 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:bankmsb:banklsb:onchannel:">func sendProgramChange(UInt8, bankMSB: UInt8, bankLSB: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">MIDI Program Change 및 Bank Select 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitmidiinstrument/send(_:">func send(UnsafePointer&lt;MIDIEventList&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">MIDI 이벤트 목록을 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendpitchbend(_:onchannel:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Hermitian rank 1 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_csrot(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
