---
source_path: "documentation/Accelerate/vs512subs.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vs512subs"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vs512subs:0000:0001">vS512SubS(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vs512subs:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vs512subs:0002:0001">Signed 512-bit subtraction with saturation (clipping).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vs512subs:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vs512subs:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vS512SubS(_ a: UnsafePointer<vS512>, _ b: UnsafePointer<vS512>, _ result: UnsafeMutablePointer<vS512>)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avmetadatakey/itunesmetadatakeyaccountkind.md">static let id3MetadataKeyAlbumSortOrder: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetriceventstreampublisher/allmetrics(">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static var tracks: AVAsyncProperty&lt;Root, [AVMutableMovieTrack]&gt;](avpartialasyncproperty/tracks-2lj40.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">적어도 하나의 movie fragment가 에셋을 확장하는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func loadTracks(withMediaType: AVMediaType, completionHandler: ([AVMutableMovieTrack]?, (any Error)?) -&gt; Void)](avmutablemovie/loadtracks(withmediatype:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 존재하거나 향후 존재할 수 있는 프래그먼트의 총 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func loadTracks(withMediaCharacteristic: AVMediaCharacteristic, completionHandler: ([AVMutableMovieTrack]?, (any Error)?) -&gt; Void)](avmutablemovie/loadtracks(withmediacharacteristic:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">에셋을 composition 트랙의 세그먼트로 사용할 수 있는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vu512add(_:_:_:">func vU512Add(UnsafePointer&lt;vU512&gt;, UnsafePointer&lt;vU512&gt;, UnsafeMutablePointer&lt;vU512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Unsigned 512-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vu512adds(_:_:_:">func vU512AddS(UnsafePointer&lt;vU512&gt;, UnsafePointer&lt;vU512&gt;, UnsafeMutablePointer&lt;vU512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Unsigned 512-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vs512add(_:_:_:">func vS512Add(UnsafePointer&lt;vS512&gt;, UnsafePointer&lt;vS512&gt;, UnsafeMutablePointer&lt;vS512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Signed 512-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vs512adds(_:_:_:">func vS512AddS(UnsafePointer&lt;vS512&gt;, UnsafePointer&lt;vS512&gt;, UnsafeMutablePointer&lt;vS512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Signed 512-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vu1024add(_:_:_:">func vU1024Add(UnsafePointer&lt;vU1024&gt;, UnsafePointer&lt;vU1024&gt;, UnsafeMutablePointer&lt;vU1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Unsigned 1024-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vu1024adds(_:_:_:">func vU1024AddS(UnsafePointer&lt;vU1024&gt;, UnsafePointer&lt;vU1024&gt;, UnsafeMutablePointer&lt;vU1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Unsigned 1024-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vs1024add(_:_:_:">func vS1024Add(UnsafePointer&lt;vS1024&gt;, UnsafePointer&lt;vS1024&gt;, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Signed 1024-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vs1024adds(_:_:_:">func vS1024AddS(UnsafePointer&lt;vS1024&gt;, UnsafePointer&lt;vS1024&gt;, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Signed 1024-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vu256sub(_:_:_:">func vU256Sub(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Unsigned 256-bit subtraction (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vu256subs(_:_:_:">func vU256SubS(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Unsigned 256-bit subtraction with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/itunesmetadatakeycopyright.md">static let iTunesMetadataKeyCopyright: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">iTunes의 저작권 문구를 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vs512subs(_:_:_:">View on Apple Developer</a>)*</span>
