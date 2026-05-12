---
source_path: "documentation/AVFoundation/avplayeritemaccesslog/extendedlogdata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/extendedlogdata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:extendedlogdata:0000:0001">extendedLogData()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extendedlogdata:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extendedlogdata:0002:0001">액세스 로그의 Extended Log File Format 직렬화 표현을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extendedlogdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0001">iOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0002">iPadOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlogdata:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func extendedLogData() -> Data?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">액세스 로그의 Extended Log File Format 직렬화 표현입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 웹 서버 로그 파일용 W3C Extended Log File Format을 따르는 텍스트 형식으로 웹 서버 액세스 로그를 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">자세한 내용은 <a href="https://developer.apple.comhttp://www.w3.org/pub/WWW/TR/WD-logfile.html">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">콘솔 출력에 적합한 문자열은 다음을 사용해 생성할 수 있습니다.</span>

```objc
[[NSString alloc] initWithData:[myLog extendedLogData] encoding:[myLog extendedLogDataStringEncoding]]
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var events: [AVPlayerItemAccessLogEvent]](avplayeritemaccesslog/events.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">플레이어 아이템 액세스 로그 이벤트를 시간순으로 정렬한 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritemaccesslog/extendedlogdatastringencoding.md">var extendedLogDataStringEncoding: UInt</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">확장 로그 데이터의 문자열 인코딩입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/extendedlogdata(">View on Apple Developer</a>)*</span>
