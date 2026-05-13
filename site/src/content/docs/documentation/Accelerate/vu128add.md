---
source_path: "documentation/Accelerate/vu128add.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vu128add"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vu128add:0000:0001">vU128Add(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu128add:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu128add:0002:0001">Unsigned 128-bit addition (modular arithmetic).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu128add:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vu128add:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vU128Add(_ vA: vUInt32, _ vB: vUInt32) -> vUInt32
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="vu64adds(_:_:">func vU64AddS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Unsigned 64-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovietrack/inserttimerange(_:of:at:copysampledata:">func insertTimeRange(CMTimeRange, of: AVAssetTrack, at: CMTime, copySampleData: Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">변경 가능한 메타데이터 항목의 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablemovietrack/insertemptytimerange(_:">func insertEmptyTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">미디어 청크 지속 시간을 지원하는 파일 형식에서 파일에 기록되는 각 샘플 데이터 청크의 최대 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/seek(to:tolerancebefore:toleranceafter:completionhandler:">func scaleTimeRange(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙의 시간 범위 지속 시간을 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritem/seek(to:completionhandler:">func seek(to: CMTime, completionHandler: ((Bool) -&gt; Void)?)</a>-91gnw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/removetimerange(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayeritem/seek(to:">func seek(to: CMTime)</a>-1dpto.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 재생 시간을 지정된 시간으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayeritem/seek(to:tolerancebefore:toleranceafter:">func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 시간 경계 내에서 현재 재생 시간을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayeritem/seek(to:">func seek(to: Date) async -&gt; Bool</a>-5rt4x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">날짜 개체가 지정한 시간으로 현재 재생 시간을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vu128subs(_:_:">func vU128SubS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:">View on Apple Developer</a>-3s9d8)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadatakey/quicktimeuserdatakeycreationdate.md">static let quickTimeUserDataKeyCreationDate: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">영화 파일 콘텐츠의 생성 날짜를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadatakey/quicktimeuserdatakeycredits.md">static let quickTimeUserDataKeyCredits: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">영화 원본 콘텐츠의 크레딧을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/quicktimeuserdatakeydescription.md">static let quickTimeUserDataKeyDescription: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Unsigned 8-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vs8halfmultiply(_:_:">func vS8HalfMultiply(vSInt8, vSInt8) -&gt; vSInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Signed 8-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vu32halfmultiply(_:_:">func vU32HalfMultiply(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Unsigned 32-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vs32halfmultiply(_:_:">func vS32HalfMultiply(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Signed 32-bit multiplication; results are same width as multiplicands.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vu128add(_:_:">View on Apple Developer</a>)*</span>
