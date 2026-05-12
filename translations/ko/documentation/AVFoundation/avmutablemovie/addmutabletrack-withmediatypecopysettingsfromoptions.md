---
source_path: "documentation/AVFoundation/avmutablemovie/addmutabletrack-withmediatypecopysettingsfromoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovie/addmutabletrack-withmediatypecopysettingsfromoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addmutabletrackwithmediatypecopysettingsfromoptions:0000:0001">addMutableTrack(withMediaType:copySettingsFrom:options:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmutabletrackwithmediatypecopysettingsfromoptions:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmutabletrackwithmediatypecopysettingsfromoptions:0002:0001">대상 movie에 빈 트랙을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmutabletrackwithmediatypecopysettingsfromoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addmutabletrackwithmediatypecopysettingsfromoptions:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmutabletrackwithmediatypecopysettingsfromoptions:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmutabletrackwithmediatypecopysettingsfromoptions:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmutabletrackwithmediatypecopysettingsfromoptions:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmutabletrackwithmediatypecopysettingsfromoptions:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmutabletrackwithmediatypecopysettingsfromoptions:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func addMutableTrack(withMediaType mediaType: AVMediaType, copySettingsFrom track: AVAssetTrack?, options: [String : Any]? = nil) -> AVMutableMovieTrack?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="avmutablemovietrack.md">@@TOKEN_0@@</a> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>mediaType</code>: 새 트랙의 미디어 유형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>track</code>: 전송할 트랙 설정을 포함한 <a href="avassettrack.md">@@TOKEN_1@@</a>입니다. 기본 설정 트랙을 만들려면 <code>nil</code>로 설정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>options</code>: movie 객체 초기화를 지정하기 위한 키를 포함하는 딕셔너리입니다. 현재는 키가 정의되어 있지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:prototypeinstruction:completionhandler:">func mutableTrack(compatibleWith: AVAssetTrack) -&gt; AVMutableMovieTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">임의의 시간 범위를 삽입할 수 있는 가변 movie의 트랙에 대한 참조를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func addMutableTracksCopyingSettings(from: [AVAssetTrack], options: [String : Any]?) -&gt; [AVMutableMovieTrack]](avmutablevideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">대상 movie에 하나 이상의 빈 트랙을 추가하고 소스 트랙의 트랙 설정을 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablevideocomposition/init(propertiesof:">func removeTrack(AVMovieTrack)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 트랙을 대상 movie에서 제거합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovie/addmutabletrack(withmediatype:copysettingsfrom:options:">View on Apple Developer</a>)*</span>
