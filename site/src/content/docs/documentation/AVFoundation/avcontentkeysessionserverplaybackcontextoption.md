---
source_path: "documentation/AVFoundation/avcontentkeysessionserverplaybackcontextoption.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcontentkeysessionserverplaybackcontextoption:0000:0001">AVContentKeySessionServerPlaybackContextOption</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontentkeysessionserverplaybackcontextoption:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontentkeysessionserverplaybackcontextoption:0002:0001">서버 재생 컨텍스트(SPC) 생성을 위해 추가 정보를 지정하기 위한 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontentkeysessionserverplaybackcontextoption:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeysessionserverplaybackcontextoption:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVContentKeySessionServerPlaybackContextOption
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:server-playback-context-options:0008:0001">서버 재생 컨텍스트 옵션</span>

- <span class="ko-segment" data-segment-id="seg:list:server-playback-context-options:0009:0001"><a href="avcontentkeysessionserverplaybackcontextoption/protocolversions.md">static let protocolVersions: AVContentKeySessionServerPlaybackContextOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:server-playback-context-options:0010:0001">앱에서 지원하는 콘텐츠 보호 protocol의 버전을 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:server-playback-context-options:0011:0001"><a href="avcontentkeysessionserverplaybackcontextoption/serverchallenge.md">static let serverChallenge: AVContentKeySessionServerPlaybackContextOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:server-playback-context-options:0012:0001">재생 공격을 방지하기 위해 보안 서버 재생 컨텍스트(SPC)에 포함할 nonce를 지정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializing-an-options-structure:0013:0001">옵션 구조체 초기화</span>

- <span class="ko-segment" data-segment-id="seg:list:initializing-an-options-structure:0014:0001"><a href="avcontentkeysessionserverplaybackcontextoption/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializing-an-options-structure:0015:0001">지정한 raw value로 재생 컨텍스트 옵션 구조체를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0017:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func invalidatePersistableContentKey(Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]?, completionHandler: (Data?, (any Error)?) -&gt; Void)](avcontentkeysession/invalidatepersistablecontentkey(_:options:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">영구 저장 가능한 콘텐츠 키를 무효화하고, 무효화 요청 결과를 검증하기 위해 보안 서버 재생 컨텍스트(SPC)를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[func invalidateAllPersistableContentKeys(forApp: Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]?, completionHandler: (Data?, (any Error)?) -&gt; Void)](avcontentkeysession/invalidateallpersistablecontentkeys(forapp:options:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">앱의 모든 영구 저장 가능한 콘텐츠 키를 무효화하고, 무효화 요청 결과를 검증하기 위해 보안 서버 재생 컨텍스트(SPC)를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption">View on Apple Developer</a>*</span>
