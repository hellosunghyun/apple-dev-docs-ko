---
source_path: "documentation/AVFoundation/integrating-airplay-for-long-form-video-apps.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/integrating-airplay-for-long-form-video-apps"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:integrating-airplay-for-long-form-video-apps:0000:0001">장시간 비디오 앱용 AirPlay 통합</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integrating-airplay-for-long-form-video-apps:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integrating-airplay-for-long-form-video-apps:0002:0001">라우팅 시스템을 장시간 비디오 재생용으로 준비하여 AirPlay 기능을 통합하고 전용 외부 재생 경험을 구현합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:integrating-airplay-for-long-form-video-apps:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:integrating-airplay-for-long-form-video-apps:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:integrating-airplay-for-long-form-video-apps:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:integrating-airplay-for-long-form-video-apps:0004:0003">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:integrating-airplay-for-long-form-video-apps:0004:0004">Xcode 11.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0006:0001">**참고**: 이 샘플 코드 프로젝트는 WWDC 2019 세션 <a href="https://developer.apple.comhttps://developer.apple.com/videos/play/wwdc19/507/">@@TOKEN_0@@</a>와 연결됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="implementing-simple-enhanced-buffering-for-your-content.md">Implementing simple enhanced buffering for your content</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">AirPlay 지원 기기 및 지원되는 CarPlay 차량으로 콘텐츠를 더 빠르게 스트리밍하도록 앱을 단순 향상 버퍼링으로 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="implementing-flexible-enhanced-buffering-for-your-content.md">Implementing flexible enhanced buffering for your content</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">AirPlay 지원 기기 및 지원되는 CarPlay 차량으로 콘텐츠를 더 빠르게 스트리밍하도록 앱을 유연한 향상 버퍼링으로 구성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/integrating-airplay-for-long-form-video-apps">View on Apple Developer</a>*</span>
